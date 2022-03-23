# Nested unique header generation
require 'middleman-core/renderers/redcarpet'
require 'translit'
require 'digest'

class NestingUniqueHeadCounter < Middleman::Renderers::MiddlemanRedcarpetHTML

  def initialize
    super
    @@headers_history = {} if !defined?(@@headers_history)
  end

  def header(text, header_level)
    friendly_text = Translit.convert(text, :english).gsub(/<[^>]*>/,"").parameterize
    @@headers_history[header_level] = Translit.convert(text, :english).parameterize
    @@headers_history.delete_if{|x| x>header_level}

    if header_level > 1
      for i in (header_level - 1).downto(1)
        friendly_text.prepend("#{@@headers_history[i]}-") if @@headers_history.key?(i)
      end
    end

    return "<h#{header_level} id='#{friendly_text}'>#{text}</h#{header_level}>"
  end

  def codespan(code)
    tag = code.match /^\+(.+)$/
    if tag
      "<code class=tag-#{Digest::MD5.hexdigest(tag[1])[0..5]}>#{tag[1]}</code>"
    else
      "<code>#{code}</code>"
    end
  end

  def postprocess(document)
    document.gsub(
      /<blockquote>\s*(<p>([^\/]|\/[^p])+<\/p>\s*)<\/blockquote>(\s*<pre)/m,
      '<button class="collapse-button">\1<span><span class="open">Показать</span><span class="close">Свернуть</span><img class="normal" src="/images/expand.svg"><img class="hover" src="/images/expand_hover.svg"></span></button>\3 style=\'display: none;\''
    )
  end
end
