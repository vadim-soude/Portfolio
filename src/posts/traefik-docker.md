---
title: Deploiement Traefik avec Docker.
description: Une explication de comment déployer des Traefik, sous Docker, pour mettre en ligne des services en HTTPS.
date: '2024-2-6'
categories:
  - Docker
  - Réseau
  - Tuto
published: true
---

## Présentation de Traefik

[Traefik](https://doc.traefik.io/traefik/) est un service open source et gratuit permettant la mise en place d'un proxy 
donnant la possibilité, entre autre, de deployer des services web sur des sous domaine.<br>

Petit exemple pratique, vous avez un nom de domaine, vous souhaitez publier 2 applications web. <br>

Vous ne pouvez pas utiliser des ports différents pour chacun, car vous souhaitez que les deux soient disponible en https (port 443).
Et vous ne souhaitez pas non plus, configurer un serveur Nginx unique pour rediriger sur le bon service selon une url précise. <br>

Traefik peut donc être une solution pour vous. Pour faire simple, vous pourrez avoir vos deux services sous forme de sous-domaine, 
conservé le https, et ne pas avoir 1 serveur Nginx/Appache pour gérer le trafic.

Par exemple : `service1.exemple.fr` et `service2.exemple.fr`

Super ! Voyons ensemble comment mettre cela en place.

## Mise en place de Traefik
> **DISCLAIMER :**
> L'ensemble des manipulations suivantes ont été réalisé sur **Ubuntu Server 22.04 LTS** avec **Traefik v2.11**.<br>
> Si vous n'utilisez pas cette distribution Unix ou que vous utilisez un autre système d'exploitation certaines choses peuvent
> être différentes et je ne peux pas garantir que cela fonctionnera sur votre machine / serveur.

Pour la mise en place de Traefik, nous allons utiliser [Docker](https://www.docker.com). Il est donc nécessaire de l'avoir installé.

Pour déployer le service rapidement et configurer le conteneur Docker de manière clair, nous allons utiliser un docker compose.
La structure de directories sera comme suivant :

traefik :
  - dockercompose.yml
  - letsencrypt :
    1. acme.json

> Le dir letsencrypt et son contenu seront généré automatiquement.

La documentation officielle peut être retrouvée [ici](https://doc.traefik.io/traefik/providers/docker/).

Commençons donc !

## Le fichier Docker Compose 

```yml
version: '3'

services:
  # Nom du conteneur
  traefik:
    # Active le redémarrage automatique du conteneur
    restart: always
    # Image docker officiel du Docker Hub
    image: traefik:v2.11
    command:
      # Active le Dashboard de Treafik
      - "--api.insecure=true"
      # Active Docker comme provider
      - "--providers.docker=true"
      # Désactive l'exposition par défault des services web du network Docker
      - "--providers.docker.exposedbydefault=false"
      # Définit le port HTTP
      - "--entrypoints.web.address=:80"
      # Définit le port HTTPS
      - "--entrypoints.websecure.address=:443"
      # Active la gestion par Traefik des certificats HTTPS
      - "--certificatesresolvers.myresolver.acme.tlschallenge=true"
      # Adresse mail du responsable des services web
      - "--certificatesresolvers.myresolver.acme.email=exemple@gmail.com" 
      # Indique le fichier dans lequel les certificats doivent être sauvegardé
      - "--certificatesresolvers.myresolver.acme.storage=/letsencrypt/acme.json" 
    networks:
      # Le network auquel notre service doit etre attaché
      - traefik
    ports:
      - "80:80"     # Port HTTP
      - "8080:8080" # Port pour le Dashboard
      - "443:443"   # Port HTTPS
    volumes:
      # Bind le socket docker
      - type: bind
        source: /var/run/docker.sock
        target: /var/run/docker.sock
      # Bind le volume contenant les certificats
      - type: bind
        source: ./letsencrypt
        target: /letsencrypt
    deploy:
      resources:
        limits:
          # Limite mémoire, dans mon cas traefik utilise 40 Mo pour 3 services web
          memory: 350M 
    labels:
      # Activation de Traefik
      - "traefik.enable=true"
      # Adresse web du Dashboard
      - "traefik.http.routers.traefik.rule=Host(`traefik.exemple.fr`)"
      # Activation de l'HTTPS sur la page
      - "traefik.http.routers.traefik.entrypoints=websecure"
      # Indication de la source du Dashboard
      - "traefik.http.routers.traefik.service=api@internal"
      # Nom du certificat responsable du HTTPS
      - "traefik.http.routers.traefik.tls.certresolver=myresolver"
      # Activation d'un middleware pour protéger le Dashboard par un mot de passe
      - "traefik.http.routers.traefik.middlewares=traefik-auth"
      # Définition d'un login et mot de passe
      # Utiliser la commande suivante va générer une chaine de caractère pour remplacer les XXXXX
      #    htpasswd -nb admin password 
      # (Va generé le hash pour le login "admin" avec le mot de passe "password")
      - "traefik.http.middlewares.traefik-auth.basicauth.users=XXXXX"
      # Paramétrage du header du middleware (Replacer le domaine par le vôtre)
      - "traefik.http.middlewares.testheader.headers.accesscontrolallowmethods=GET,OPTIONS,PUT"
      - "traefik.http.middlewares.testheader.headers.accesscontrolallowheaders=*"
      - "traefik.http.middlewares.testheader.headers.accesscontrolalloworiginlist=https://exemple.fr"
      - "traefik.http.middlewares.testheader.headers.accesscontrolmaxage=100"
      - "traefik.http.middlewares.testheader.headers.addvaryheader=true"

networks:
  # Appel du network Docker
  traefik:
    external: true
````

## Comment déployer

TODO : 
- Définition du network docker
- Docker compose up -d

## Comment définir un service web pour un sous domaine

TDOD :
- Labels à ajouter au docker compose
- Container à ajouter au network docker