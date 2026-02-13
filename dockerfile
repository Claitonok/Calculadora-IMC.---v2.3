FROM php:8.2-apache

COPY . /var/www/html/

# Expose port 9000 and start php-fpm server
EXPOSE 80

#NOME DA IMAGEM: "calcular-imc"

#ESSE COMANDO CRIA A IMAGEM DO DOCKER,
# O NOME DA IMAGEM É "calcular-imc" E O PONTO "." 
#SIGNIFICA QUE O CONTEXTO DE CONSTRUÇÃO É O DIRETÓRIO ATUAL, 
#ONDE ESTÁ LOCALIZADO O DOCKERFILE.

#        ---->>> docker build -t calcular-imc .  <<<----
