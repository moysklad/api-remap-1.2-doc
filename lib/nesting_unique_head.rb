# Nested unique header generation
require 'middleman-core/renderers/redcarpet'
require 'translit'
require 'digest'

class NestingUniqueHeadCounter < Middleman::Renderers::MiddlemanRedcarpetHTML

  BLOCKQUOTE_BUTTON = "<blockquote><span class=\"collapse-button\"><a class=\"close\">Свернуть</a><a class=\"open\">Показать</a></span></blockquote>"
  DISPLAY_NONE = "style=\"display: none;\""

  def initialize
    super
    @@headers_history = {} if !defined?(@@headers_history)
  end

  def header(text, header_level)
    friendly_text = Translit.convert(text, :english).gsub(/<[^>]*>/,"").parameterize
    @@headers_history[header_level] = Translit.convert(text, :english).parameterize

    if header_level > 1
      for i in (header_level - 1).downto(1)
        friendly_text.prepend("#{@@headers_history[i]}-") if @@headers_history.key?(i)
      end
    end

    return "<h#{header_level} id='#{friendly_text}'>#{text}</h#{header_level}>"
  end

  def block_code(code, language)
    block = super
    index = block.index('>')
    BLOCKQUOTE_BUTTON + block.insert(index, DISPLAY_NONE)
  end

  def codespan(code)
    tag = code.match /^\+(.+)$/
    if tag
      "<code class=tag-#{Digest::MD5.hexdigest(tag[1])[0..5]}>#{tag[1]}</code>"
    else
      "<code>#{code}</code>"
    end
  end

end
