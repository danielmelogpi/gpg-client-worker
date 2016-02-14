#!/usr/bin/ruby
require './deps.rb'

def listar_chaves(privacidade)
    identidades = []
    for identidade in GPGME::Key.find privacidade
        identidades.push identidade.email
    end
    return identidades
end


#puts 'Essas sao as identidades privadas conhecidas nessa maquina'
(listar_chaves :secret).each do |email|
    puts "#{email}"
end
