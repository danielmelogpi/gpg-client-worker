#!/usr/bin/ruby
require './deps.rb'

def listar_chaves(privacidade)
    identidades = []
    for identidade in GPGME::Key.find privacidade
        identidades.push identidade.email
    end
    return identidades
end


(listar_chaves :public).each do |email|
    puts "#{email}"
end
