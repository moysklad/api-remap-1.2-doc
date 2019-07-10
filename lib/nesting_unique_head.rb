# Nested unique header generation
require 'middleman-core/renderers/redcarpet'
require 'translit'

class NestingUniqueHeadCounter < Middleman::Renderers::MiddlemanRedcarpetHTML
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
end
