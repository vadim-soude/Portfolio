---
title: Comment rédiger en Markdown.
description: Comment ecrire du texte/documentation en Markdown.
date: '2024-1-20'
categories:
  - howto
published: true
---

Cet article a pour but de vous apprendre à écrire en [Markdown](https://fr.wikipedia.org/wiki/Markdown) pour la rédaction de vos documentations, de prise de note ou de première mise au propre d'écrit divers.

Je serais donc concis afin de pouvoir utiliser cet article comme d’un aide-mémoire.

---

## Les titres

Le symbole `#` permet de définir vos titres / headers.

Le nombre d' `#` permet de définir la taille de votre titre, un seul permet d'obtenir un grand titre comme en haut de cet article et cela est possible jusqu'à cinq `#` pour obtenir un titre comme suivant :

`##### Exemple titre`

##### Exemple titre

**Note** : Un sixième titre est possible, il possède la même taille que le cinquième mais n'est pas en gras.

---

## Les séparateurs

Les séparateurs sont les lignes horizontales qui sépare les différentes catégories de cet article, ces séparateurs peuvent être ajoutés à l'aide de `---` précédé et suivit d'un retour à la ligne.

---

## Le formatage classique

Des options de formatage de texte classique sont disponibles en markdown.

### Gras

`**Texte**` : **Texte**

### italique

`*Texte*` : *Texte*

### Barré

`~~Texte~~` : ~~Texte~~

### Commentaire / Citation

`> Texte de test` :

> Texte de test

**Note** : Ne fonctionne qu'en début de ligne.


### Code simple

``` `Text` ``` : `Texte`

### Block de code

` ```python `<br>
` def awesome(): `<br>
`  print('awesome!')`<br>
` awesome()``` `

```python
def awesome():
    print('awesome!')
awesome()
```

**Note** : Ici la mention `python` après le triple `` ` `` permet de définir le langage du bloc de code, cela permet d'afficher le code avec une bonne coloration.

---

## Les listes

### Listes ordonées

`1. Premier élément`<br>
`2. Second élément`<br>
`3. Troisième élément`

1. Premier élément
2. Second élément
3. Troisième élément

### Listes non-ordonées

`- Premier élément`<br>
`- Second élément`<br>
`- Troisième élément`

- Premier élément
- Second élément
- Troisième élément

**Note** : Les puces utilisé ici sont des `-` mais peuvent être remplacé par des `+` ou des `*`. Des sous listes sont aussi possibles et les puces prendrons une apparence différente.

### Liste de tache

`- [x] Premier élément`<br>
`- [ ] Second élément`<br>
`- [ ] Troisième élément`

- [x] Premier élément
- [ ] Second élément
- [ ] Troisième élément

---

## Les tableaux

`| Categorie | Nom |`<br>
`| - | - |`<br>
`| Chat | Lopo |`<br>
`| Chien | Bob |`<br><br>

| Categorie | Nom | 
| - | - |
| Chat | Lopo |
| Chien | Bob |

---

## Les liens

### Liens de base

`[site](https://www.google.com)` : Allez voir ce [site](https://www.google.com) !

### Liens avec message

`[lien](https://www.google.com "Super site !") !` :

Passez votre curseur sur ce [lien](https://www.google.com "Super site !") !

---

## Les images

### Image simple

`![Description de l'image](https://placebear.com/160/160)` :

![Description de l'image](https://placebear.com/160/160)

### Image par référence

`![Description de l'image][ours]`

`[ours]: https://placebear.com/150/150` :

![Description de l'image][ours]

[ours]: https://placebear.com/150/150

---

## Support HTML

Utilisations de tag html est possible et autorisé en Markdown.

Cela permet notament d'utilisé les `<u></u>` pour <u>souligner</u> du texte (ce qui n'est pas possible avec le typage markdown basique)[^2].

[^2]: Discord a popularisé l'utilisation de double `_` autour du texte a souligné, mais cela n'est pas du markdown mais un ajout de leur part.

Il est aussi possible d'utiliser du [CSS](https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade) affin d'aller encore plus loin !

**Exemple** : `<span style="color:#dbce14">Du jaune !</span>` : <span style="color:#dbce14">Du jaune !</span>

---

## Antisèche

| Format | Exemple |
| - | - |
| `**Texte**` | **Texte** |
| `*Texte*` | *Texte* |
| `<u>Texte</u>` | <u>Texte</u> |
| `~~Texte~~` | ~~Texte~~ |
| `[site](https://www.google.com)` | [site](https://www.google.com) |

---

*L'entièreté de mes articles sont écrit en Markdown.*

