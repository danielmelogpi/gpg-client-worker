#!/usr/bin/ruby
require './deps.rb'
crypto = GPGME::Crypto.new :armor => true

recipiente = ARGV[0]
msg = ARGV[1]
#puts recipiente
#puts msg
#cryptedData = crypto.encrypt msg, :recipients => recipiente
cryptedData = crypto.encrypt(msg, :recipients => recipiente)

puts cryptedData.read

# pesquisa uso quando um mesmo email estiver associado a mais de
# uma chave no ambiente de execucao
