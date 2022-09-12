const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const path = require('path');
const fs = require('fs');

const lunr = require('../source/javascripts/lib/_lunr.js')
require('../source/javascripts/lib/_lunr.stemmer.support.js')(lunr);
require('../source/javascripts/lib/_lunr.ru.js')(lunr);
require('../source/javascripts/lib/_lunr.multi.js')(lunr);

const filePrefix = process.argv[2];
console.log("Prebuild index for " + filePrefix);

async function getDoc(filename) {
  const innerFilename = path.relative(filePrefix, filename).replace(/\/index.html$/, "/");
  let options = { runScripts: "dangerously", resources: "usable" };
  return JSDOM.fromFile(filename, options).then(dom => {
    return new Promise((resolve, reject) => { // (*)
      dom.window.addEventListener("searchDocsGenerated", (event) => {
        event.detail.documents.forEach(doc => doc.id = doc.title + "|" + innerFilename + "|" + doc.id);
        resolve(event.detail.documents);
      });
    });
  }, err => console.log(err));
}

function buildIndex(links) {
  return lunr(function () {
    this.use(lunr.multiLanguage('ru', 'en'));
    this.ref('id');
    this.tokenizer.separator = /\s/;
    this.field('title', { boost: 10 });
    this.field('body');

    links.forEach(function(link) {
      this.add(link);
    }, this);
  });
}

async function printDocs(htmlFiles) {
  const result = await Promise.all(htmlFiles.map(htmlFile => getDoc(htmlFile)));
  const index = buildIndex(result.flat());
  fs.writeFileSync(filePrefix + "/javascripts/global_index.js", "document.globalSearchIndex=" + JSON.stringify(index));
}

function getPages(startPath, filter) {
    let result = [];

    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }

    let files = fs.readdirSync(startPath);
    for (var i = 0; i < files.length; i++) {
        let filename = path.join(startPath, files[i]);
        let stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            result = result.concat(getPages(filename, filter)); //recurse
        } else if (filename.endsWith(filter)) {
            result.push(filename);
        }
    }

    return result;
}

printDocs(getPages(filePrefix, ".html"));
