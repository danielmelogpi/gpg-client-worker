#!/usr/bin/ruby

require './deps.rb'
data = GPGME::Data.new(ARGV[0])
crypto = GPGME::Crypto.new :armor => true
decrypted = crypto.decrypt data
print decrypted.read


#tratar GPGME::Error::BadPassphrase
