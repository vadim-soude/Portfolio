---
title: Deploiement d'un service web avec Traefik.
description: Une explication de comment déployer des services web, dans des sous-domaines, avec Traefik.
date: '2024-2-10'
categories:
  - Docker
  - Réseau
  - Proxy
published: true
---

> **DISCLAIMER :**
> L'ensemble des manipulations suivantes ont été réalisé sur **Ubuntu Server 22.04 LTS** avec **Traefik v2.11**.<br>
> Si vous n'utilisez pas cette distribution Unix ou que vous utilisez un autre système d'exploitation certaines choses peuvent
> être différentes et je ne peux pas garantir que cela fonctionnera sur votre machine / serveur.

## Prérequis

Cet article est la suite directe de [celui-ci](https://vadim-soude.github.io/Portfolio/traefik-docker).

Je vous invite vivement à avoir suivi la première partie avant de continuer.

## Dockeriser de vos services Web

Dans cet article, la demonstration sera faite avec Docker comme solution de déploiement de service web.

Qu'est-ce que Docker ? C'est un outil qui permet de déployer des applications dans des conteneurs. Un conteneur est un environnement isolé qui contient tout ce dont une application a besoin pour fonctionner, y compris le code, les bibliothèques et les dépendances.
 
En apprendre plus sur Docker [ici](https://www.docker.com).

## Modifications à apporter

Dans le fichier `dockercompose.yml` de votre service, dans la section de votre service, ajouter les mentions suivante :

```yml
    networks:
      # Il faut que votre service soit dans le même network docker
      - traefik
    labels:
      # Activé Traefik pour ce service car celui-ci ne l'est pas par default
      - "traefik.enable=true"
      
      # Dans les labels suivants, il faut remplacer la mention 'nomduservice' par le nom de votre service

      # Remplacer 'XXXX' par le sous domaine de votre choix, souvent, cela sera le nom de votre service
      - "traefik.http.routers.nomduservice.rule=Host(`XXXX.exemple.fr`)"
      # Activé l'HTTPS sur la page
      - "traefik.http.routers.nomduservice.entrypoints=websecure"
      # Le nom du certificat paramétré dans Traefik
      - "traefik.http.routers.nomduservice.tls.certresolver=myresolver"
      # Le port du service dans le proxy
      - "traefik.http.services.nomduservice.loadbalancer.server.port=8080"
```

Il faut aussi penser à ajouter la mention du réseau Traefik dans le fichier.

```yml
networks:
  # Appel du network Docker
  traefik:
    external: true
```

## Configuration DNS

Pour accéder à votre service sur le sous domaine de votre choix, il faut que celui-ci soit résolu par un serveur DNS.

Pour cela, il faut ajouter une entrée DNS de type A pour le sous domaine de votre choix, qui pointe vers l'adresse IP de votre serveur.

## Comment déployer

Il vous suffit maintenant de faire `docker compose up -d`, votre service sera disponible sur le sous domaine de votre choix.