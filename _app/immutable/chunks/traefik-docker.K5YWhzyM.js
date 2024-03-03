import{S as _a,i as ba,s as qa,H as Xe,y as ha,z as wa,A as Ta,O as Pa,T as Da,g as xa,d as Ba,B as Sa,R as da,k as p,q as n,a as i,_ as Ne,l as r,m as c,r as t,h as e,c as u,$ as Ue,n as y,b as o,C as a,D as za}from"./index.rDtGiAC-.js";import{M as La}from"./mdsvex.OWYYiW4z.js";function Fa(I){let C,m,v,f,A,d,R,$s,As,P,Ms,js,ys,x,Vs,Gs,fs,N,Ks,Ds,k,Qs,J,Js,Ws,W,Ys,ds,U,Zs,ms,B,gs,vs,X,D,Y,se,ee,Z,ae,le,g,oe,ne,te,pe,ks,_,re,S,ce,ie,Es,$,ue,_s,M,Ce,bs,b,ss,Ae,ye,j,fe,es,as,De,qs,V,ls,de,hs,q,me,z,ve,ke,ws,G,Ee,Ts,L,_e,Ps,os,va=`<pre class="shiki poimandres" style="background-color: #1b1e28" tabindex="0"><code><span class="line"><span style="color: #5DE4C7">version</span><span style="color: #A6ACCD">: </span><span style="color: #A6ACCD">&#39;</span><span style="color: #5DE4C7">3</span><span style="color: #A6ACCD">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #5DE4C7">services</span><span style="color: #A6ACCD">:</span></span>
<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #767C9DB0; font-style: italic"># Nom du conteneur</span></span>
<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #5DE4C7">traefik</span><span style="color: #A6ACCD">:</span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #767C9DB0; font-style: italic"># Active le redémarrage automatique du conteneur</span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #5DE4C7">restart</span><span style="color: #A6ACCD">: </span><span style="color: #ADD7FF">always</span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #767C9DB0; font-style: italic"># Image docker officiel du Docker Hub</span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #5DE4C7">image</span><span style="color: #A6ACCD">: </span><span style="color: #ADD7FF">traefik:v2.11</span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #5DE4C7">command</span><span style="color: #A6ACCD">:</span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #767C9DB0; font-style: italic"># Active le Dashboard de Treafik</span></span>
<span class="line"><span style="color: #A6ACCD">      - </span><span style="color: #A6ACCD">&quot;</span><span style="color: #5DE4C7">--api.insecure=true</span><span style="color: #A6ACCD">&quot;</span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #767C9DB0; font-style: italic"># Active Docker comme provider</span></span>
<span class="line"><span style="color: #A6ACCD">      - </span><span style="color: #A6ACCD">&quot;</span><span style="color: #5DE4C7">--providers.docker=true</span><span style="color: #A6ACCD">&quot;</span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #767C9DB0; font-style: italic"># Désactive l&#39;exposition par défault des services web du network Docker</span></span>
<span class="line"><span style="color: #A6ACCD">      - </span><span style="color: #A6ACCD">&quot;</span><span style="color: #5DE4C7">--providers.docker.exposedbydefault=false</span><span style="color: #A6ACCD">&quot;</span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #767C9DB0; font-style: italic"># Définit le port HTTP</span></span>
<span class="line"><span style="color: #A6ACCD">      - </span><span style="color: #A6ACCD">&quot;</span><span style="color: #5DE4C7">--entrypoints.web.address=:80</span><span style="color: #A6ACCD">&quot;</span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #767C9DB0; font-style: italic"># Définit le port HTTPS</span></span>
<span class="line"><span style="color: #A6ACCD">      - </span><span style="color: #A6ACCD">&quot;</span><span style="color: #5DE4C7">--entrypoints.websecure.address=:443</span><span style="color: #A6ACCD">&quot;</span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #767C9DB0; font-style: italic"># Active la gestion par Traefik des certificats HTTPS</span></span>
<span class="line"><span style="color: #A6ACCD">      - </span><span style="color: #A6ACCD">&quot;</span><span style="color: #5DE4C7">--certificatesresolvers.myresolver.acme.tlschallenge=true</span><span style="color: #A6ACCD">&quot;</span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #767C9DB0; font-style: italic"># Adresse mail du responsable des services web</span></span>
<span class="line"><span style="color: #A6ACCD">      - </span><span style="color: #A6ACCD">&quot;</span><span style="color: #5DE4C7">--certificatesresolvers.myresolver.acme.email=exemple@gmail.com</span><span style="color: #A6ACCD">&quot;</span><span style="color: #A6ACCD"> </span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #767C9DB0; font-style: italic"># Indique le fichier dans lequel les certificats doivent être sauvegardés</span></span>
<span class="line"><span style="color: #A6ACCD">      - </span><span style="color: #A6ACCD">&quot;</span><span style="color: #5DE4C7">--certificatesresolvers.myresolver.acme.storage=/letsencrypt/acme.json</span><span style="color: #A6ACCD">&quot;</span><span style="color: #A6ACCD"> </span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #5DE4C7">networks</span><span style="color: #A6ACCD">:</span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #767C9DB0; font-style: italic"># Le network auquel notre service doit etre attaché</span></span>
<span class="line"><span style="color: #A6ACCD">      - </span><span style="color: #ADD7FF">traefik</span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #5DE4C7">ports</span><span style="color: #A6ACCD">:</span></span>
<span class="line"><span style="color: #A6ACCD">      - </span><span style="color: #A6ACCD">&quot;</span><span style="color: #5DE4C7">80:80</span><span style="color: #A6ACCD">&quot;</span><span style="color: #A6ACCD">     </span><span style="color: #767C9DB0; font-style: italic"># Port HTTP</span></span>
<span class="line"><span style="color: #A6ACCD">      - </span><span style="color: #A6ACCD">&quot;</span><span style="color: #5DE4C7">8080:8080</span><span style="color: #A6ACCD">&quot;</span><span style="color: #A6ACCD"> </span><span style="color: #767C9DB0; font-style: italic"># Port pour le Dashboard</span></span>
<span class="line"><span style="color: #A6ACCD">      - </span><span style="color: #A6ACCD">&quot;</span><span style="color: #5DE4C7">443:443</span><span style="color: #A6ACCD">&quot;</span><span style="color: #A6ACCD">   </span><span style="color: #767C9DB0; font-style: italic"># Port HTTPS</span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #5DE4C7">volumes</span><span style="color: #A6ACCD">:</span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #767C9DB0; font-style: italic"># Bind le socket docker</span></span>
<span class="line"><span style="color: #A6ACCD">      - </span><span style="color: #5DE4C7">type</span><span style="color: #A6ACCD">: </span><span style="color: #ADD7FF">bind</span></span>
<span class="line"><span style="color: #A6ACCD">        </span><span style="color: #5DE4C7">source</span><span style="color: #A6ACCD">: </span><span style="color: #ADD7FF">/var/run/docker.sock</span></span>
<span class="line"><span style="color: #A6ACCD">        </span><span style="color: #5DE4C7">target</span><span style="color: #A6ACCD">: </span><span style="color: #ADD7FF">/var/run/docker.sock</span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #767C9DB0; font-style: italic"># Bind le volume contenant les certificats</span></span>
<span class="line"><span style="color: #A6ACCD">      - </span><span style="color: #5DE4C7">type</span><span style="color: #A6ACCD">: </span><span style="color: #ADD7FF">bind</span></span>
<span class="line"><span style="color: #A6ACCD">        </span><span style="color: #5DE4C7">source</span><span style="color: #A6ACCD">: </span><span style="color: #ADD7FF">./letsencrypt</span></span>
<span class="line"><span style="color: #A6ACCD">        </span><span style="color: #5DE4C7">target</span><span style="color: #A6ACCD">: </span><span style="color: #ADD7FF">/letsencrypt</span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #5DE4C7">deploy</span><span style="color: #A6ACCD">:</span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #5DE4C7">resources</span><span style="color: #A6ACCD">:</span></span>
<span class="line"><span style="color: #A6ACCD">        </span><span style="color: #5DE4C7">limits</span><span style="color: #A6ACCD">:</span></span>
<span class="line"><span style="color: #A6ACCD">          </span><span style="color: #767C9DB0; font-style: italic"># Limite mémoire, dans mon cas traefik utilise 40 Mo pour 3 services web</span></span>
<span class="line"><span style="color: #A6ACCD">          </span><span style="color: #5DE4C7">memory</span><span style="color: #A6ACCD">: </span><span style="color: #ADD7FF">350M</span><span style="color: #A6ACCD"> </span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #5DE4C7">labels</span><span style="color: #A6ACCD">:</span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #767C9DB0; font-style: italic"># Activation de Traefik</span></span>
<span class="line"><span style="color: #A6ACCD">      - </span><span style="color: #A6ACCD">&quot;</span><span style="color: #5DE4C7">traefik.enable=true</span><span style="color: #A6ACCD">&quot;</span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #767C9DB0; font-style: italic"># Adresse web du Dashboard</span></span>
<span class="line"><span style="color: #A6ACCD">      - </span><span style="color: #A6ACCD">&quot;</span><span style="color: #5DE4C7">traefik.http.routers.traefik.rule=Host(&#96;traefik.exemple.fr&#96;)</span><span style="color: #A6ACCD">&quot;</span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #767C9DB0; font-style: italic"># Activation de l&#39;HTTPS sur la page</span></span>
<span class="line"><span style="color: #A6ACCD">      - </span><span style="color: #A6ACCD">&quot;</span><span style="color: #5DE4C7">traefik.http.routers.traefik.entrypoints=websecure</span><span style="color: #A6ACCD">&quot;</span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #767C9DB0; font-style: italic"># Indication de la source du Dashboard</span></span>
<span class="line"><span style="color: #A6ACCD">      - </span><span style="color: #A6ACCD">&quot;</span><span style="color: #5DE4C7">traefik.http.routers.traefik.service=api@internal</span><span style="color: #A6ACCD">&quot;</span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #767C9DB0; font-style: italic"># Nom du certificat responsable du HTTPS</span></span>
<span class="line"><span style="color: #A6ACCD">      - </span><span style="color: #A6ACCD">&quot;</span><span style="color: #5DE4C7">traefik.http.routers.traefik.tls.certresolver=myresolver</span><span style="color: #A6ACCD">&quot;</span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #767C9DB0; font-style: italic"># Activation d&#39;un middleware pour protéger le Dashboard par un mot de passe</span></span>
<span class="line"><span style="color: #A6ACCD">      - </span><span style="color: #A6ACCD">&quot;</span><span style="color: #5DE4C7">traefik.http.routers.traefik.middlewares=traefik-auth</span><span style="color: #A6ACCD">&quot;</span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #767C9DB0; font-style: italic"># Définition d&#39;un login et mot de passe</span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #767C9DB0; font-style: italic"># Utiliser la commande suivante va générer une chaîne de caractères pour remplacer les XXXXX</span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #767C9DB0; font-style: italic">#    htpasswd -nb admin password </span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #767C9DB0; font-style: italic"># (Va générer le hash pour le login &quot;admin&quot; avec le mot de passe &quot;password&quot;)</span></span>
<span class="line"><span style="color: #A6ACCD">      - </span><span style="color: #A6ACCD">&quot;</span><span style="color: #5DE4C7">traefik.http.middlewares.traefik-auth.basicauth.users=XXXXX</span><span style="color: #A6ACCD">&quot;</span></span>
<span class="line"><span style="color: #A6ACCD">      </span><span style="color: #767C9DB0; font-style: italic"># Paramétrage du header du middleware (Replacer le domaine par le vôtre)</span></span>
<span class="line"><span style="color: #A6ACCD">      - </span><span style="color: #A6ACCD">&quot;</span><span style="color: #5DE4C7">traefik.http.middlewares.testheader.headers.accesscontrolallowmethods=GET,OPTIONS,PUT</span><span style="color: #A6ACCD">&quot;</span></span>
<span class="line"><span style="color: #A6ACCD">      - </span><span style="color: #A6ACCD">&quot;</span><span style="color: #5DE4C7">traefik.http.middlewares.testheader.headers.accesscontrolallowheaders=*</span><span style="color: #A6ACCD">&quot;</span></span>
<span class="line"><span style="color: #A6ACCD">      - </span><span style="color: #A6ACCD">&quot;</span><span style="color: #5DE4C7">traefik.http.middlewares.testheader.headers.accesscontrolalloworiginlist=https://exemple.fr</span><span style="color: #A6ACCD">&quot;</span></span>
<span class="line"><span style="color: #A6ACCD">      - </span><span style="color: #A6ACCD">&quot;</span><span style="color: #5DE4C7">traefik.http.middlewares.testheader.headers.accesscontrolmaxage=100</span><span style="color: #A6ACCD">&quot;</span></span>
<span class="line"><span style="color: #A6ACCD">      - </span><span style="color: #A6ACCD">&quot;</span><span style="color: #5DE4C7">traefik.http.middlewares.testheader.headers.addvaryheader=true</span><span style="color: #A6ACCD">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #5DE4C7">networks</span><span style="color: #A6ACCD">:</span></span>
<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #767C9DB0; font-style: italic"># Appel du network Docker</span></span>
<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #5DE4C7">traefik</span><span style="color: #A6ACCD">:</span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #5DE4C7">external</span><span style="color: #A6ACCD">: </span><span style="color: #5DE4C7">true</span></span></code></pre>`,ns,F,be,xs,h,qe,ts,he,we,Bs,K,Te,Ss,ps,ka='<pre class="shiki poimandres" style="background-color: #1b1e28" tabindex="0"><code><span class="line"><span style="color: #a6accd">  docker network create traefik</span></span></code></pre>',rs,w,Pe,cs,xe,Be,zs,is,Ea='<pre class="shiki poimandres" style="background-color: #1b1e28" tabindex="0"><code><span class="line"><span style="color: #a6accd">  docker compose up -d</span></span></code></pre>',us,Q,Se,Ls,H,ze,Fs,T,Le,O,Fe,He;return{c(){C=p("h2"),m=n("Présentation de Traefik"),v=i(),f=p("p"),A=p("a"),d=n("Traefik"),R=n(` est un service open source et gratuit permettant la mise en place d’un proxy
donnant la possibilité, entre autre, de deployer des services web sur des sous-domaines.`),$s=p("br"),As=i(),P=p("p"),Ms=n("Petit exemple pratique, vous avez un nom de domaine, vous souhaitez publier 2 applications web. "),js=p("br"),ys=i(),x=p("p"),Vs=n(`Vous ne pouvez pas utiliser des ports différents pour chacun, car vous souhaitez que les deux soient disponible en https (port 443).
Et vous ne souhaitez pas non plus, configurer un serveur Nginx unique pour rediriger sur le bon service selon une url précise. `),Gs=p("br"),fs=i(),N=p("p"),Ks=n(`Traefik peut donc être une solution pour vous. Pour faire simple, vous pourrez avoir vos deux services sous forme de sous-domaine,
conserver le https, et ne pas avoir 1 serveur Nginx/Appache pour gérer le trafic.`),Ds=i(),k=p("p"),Qs=n("Par exemple : "),J=p("code"),Js=n("service1.exemple.fr"),Ws=n(" et "),W=p("code"),Ys=n("service2.exemple.fr"),ds=i(),U=p("p"),Zs=n("Super ! Voyons ensemble comment mettre cela en place."),ms=i(),B=p("h2"),gs=n("Mise en place de Traefik"),vs=i(),X=p("blockquote"),D=p("p"),Y=p("strong"),se=n("DISCLAIMER :"),ee=n(`
L’ensemble des manipulations suivantes ont été réalisées sur `),Z=p("strong"),ae=n("Ubuntu Server 22.04 LTS"),le=n(" avec "),g=p("strong"),oe=n("Traefik v2.11"),ne=n("."),te=p("br"),pe=n(`
Si vous n’utilisez pas cette distribution Unix ou que vous utilisez un autre système d’exploitation certaines choses peuvent
être différentes et je ne peux pas garantir que cela fonctionnera sur votre machine / serveur.`),ks=i(),_=p("p"),re=n("Pour la mise en place de Traefik, nous allons utiliser "),S=p("a"),ce=n("Docker"),ie=n(". Il est donc nécessaire de l’avoir installé."),Es=i(),$=p("p"),ue=n(`Pour déployer le service rapidement et configurer le conteneur Docker de manière claire, nous allons utiliser un docker compose.
La structure de directories sera comme suivant :`),_s=i(),M=p("p"),Ce=n("traefik :"),bs=i(),b=p("ul"),ss=p("li"),Ae=n("dockercompose.yml"),ye=i(),j=p("li"),fe=n("letsencrypt :"),es=p("ol"),as=p("li"),De=n("acme.json"),qs=i(),V=p("blockquote"),ls=p("p"),de=n("Le dir letsencrypt et son contenu seront générés automatiquement."),hs=i(),q=p("p"),me=n("La documentation officielle peut être retrouvée "),z=p("a"),ve=n("ici"),ke=n("."),ws=i(),G=p("p"),Ee=n("Commençons donc !"),Ts=i(),L=p("h2"),_e=n("Le fichier Docker Compose"),Ps=i(),os=new Ne(!1),ns=i(),F=p("h2"),be=n("Comment déployer"),xs=i(),h=p("p"),qe=n("Avant de déployer notre service, nous avons besoin de créer le network Docker "),ts=p("code"),he=n("traefik"),we=n("."),Bs=i(),K=p("p"),Te=n("Pour cela, il suffit de faire :"),Ss=i(),ps=new Ne(!1),rs=i(),w=p("p"),Pe=n("Ensuite, dans le même directory que le fichier "),cs=p("code"),xe=n("dockercompose.yml"),Be=n(", executez la commande :"),zs=i(),is=new Ne(!1),us=i(),Q=p("p"),Se=n(`Si tout s’est bien passé, vous ne devriez pas avoir d’erreur dans la console et en vous rendant sur l’endpoint du dashboard,
votre navigateur devrait vous demander le login et mot de passe avant de vous afficher le dashboard Traefik en lui-même !`),Ls=i(),H=p("h2"),ze=n("Deployer un sous domaine"),Fs=i(),T=p("p"),Le=n("Dans "),O=p("a"),Fe=n("cet article"),He=n(`, vous pourrez apprendre à
déployer un service web sur un sous domaine a l’aide du Traefik que nous venons de mettre en place !`),this.h()},l(s){C=r(s,"H2",{id:!0});var l=c(C);m=t(l,"Présentation de Traefik"),l.forEach(e),v=u(s),f=r(s,"P",{});var Hs=c(f);A=r(Hs,"A",{href:!0,rel:!0});var $e=c(A);d=t($e,"Traefik"),$e.forEach(e),R=t(Hs,` est un service open source et gratuit permettant la mise en place d’un proxy
donnant la possibilité, entre autre, de deployer des services web sur des sous-domaines.`),$s=r(Hs,"BR",{}),Hs.forEach(e),As=u(s),P=r(s,"P",{});var Oe=c(P);Ms=t(Oe,"Petit exemple pratique, vous avez un nom de domaine, vous souhaitez publier 2 applications web. "),js=r(Oe,"BR",{}),Oe.forEach(e),ys=u(s),x=r(s,"P",{});var Ie=c(x);Vs=t(Ie,`Vous ne pouvez pas utiliser des ports différents pour chacun, car vous souhaitez que les deux soient disponible en https (port 443).
Et vous ne souhaitez pas non plus, configurer un serveur Nginx unique pour rediriger sur le bon service selon une url précise. `),Gs=r(Ie,"BR",{}),Ie.forEach(e),fs=u(s),N=r(s,"P",{});var Me=c(N);Ks=t(Me,`Traefik peut donc être une solution pour vous. Pour faire simple, vous pourrez avoir vos deux services sous forme de sous-domaine,
conserver le https, et ne pas avoir 1 serveur Nginx/Appache pour gérer le trafic.`),Me.forEach(e),Ds=u(s),k=r(s,"P",{});var Cs=c(k);Qs=t(Cs,"Par exemple : "),J=r(Cs,"CODE",{});var je=c(J);Js=t(je,"service1.exemple.fr"),je.forEach(e),Ws=t(Cs," et "),W=r(Cs,"CODE",{});var Ve=c(W);Ys=t(Ve,"service2.exemple.fr"),Ve.forEach(e),Cs.forEach(e),ds=u(s),U=r(s,"P",{});var Ge=c(U);Zs=t(Ge,"Super ! Voyons ensemble comment mettre cela en place."),Ge.forEach(e),ms=u(s),B=r(s,"H2",{id:!0});var Ke=c(B);gs=t(Ke,"Mise en place de Traefik"),Ke.forEach(e),vs=u(s),X=r(s,"BLOCKQUOTE",{});var Qe=c(X);D=r(Qe,"P",{});var E=c(D);Y=r(E,"STRONG",{});var Je=c(Y);se=t(Je,"DISCLAIMER :"),Je.forEach(e),ee=t(E,`
L’ensemble des manipulations suivantes ont été réalisées sur `),Z=r(E,"STRONG",{});var We=c(Z);ae=t(We,"Ubuntu Server 22.04 LTS"),We.forEach(e),le=t(E," avec "),g=r(E,"STRONG",{});var Ye=c(g);oe=t(Ye,"Traefik v2.11"),Ye.forEach(e),ne=t(E,"."),te=r(E,"BR",{}),pe=t(E,`
Si vous n’utilisez pas cette distribution Unix ou que vous utilisez un autre système d’exploitation certaines choses peuvent
être différentes et je ne peux pas garantir que cela fonctionnera sur votre machine / serveur.`),E.forEach(e),Qe.forEach(e),ks=u(s),_=r(s,"P",{});var Os=c(_);re=t(Os,"Pour la mise en place de Traefik, nous allons utiliser "),S=r(Os,"A",{href:!0,rel:!0});var Ze=c(S);ce=t(Ze,"Docker"),Ze.forEach(e),ie=t(Os,". Il est donc nécessaire de l’avoir installé."),Os.forEach(e),Es=u(s),$=r(s,"P",{});var ge=c($);ue=t(ge,`Pour déployer le service rapidement et configurer le conteneur Docker de manière claire, nous allons utiliser un docker compose.
La structure de directories sera comme suivant :`),ge.forEach(e),_s=u(s),M=r(s,"P",{});var sa=c(M);Ce=t(sa,"traefik :"),sa.forEach(e),bs=u(s),b=r(s,"UL",{});var Is=c(b);ss=r(Is,"LI",{});var ea=c(ss);Ae=t(ea,"dockercompose.yml"),ea.forEach(e),ye=u(Is),j=r(Is,"LI",{});var Re=c(j);fe=t(Re,"letsencrypt :"),es=r(Re,"OL",{});var aa=c(es);as=r(aa,"LI",{});var la=c(as);De=t(la,"acme.json"),la.forEach(e),aa.forEach(e),Re.forEach(e),Is.forEach(e),qs=u(s),V=r(s,"BLOCKQUOTE",{});var oa=c(V);ls=r(oa,"P",{});var na=c(ls);de=t(na,"Le dir letsencrypt et son contenu seront générés automatiquement."),na.forEach(e),oa.forEach(e),hs=u(s),q=r(s,"P",{});var Rs=c(q);me=t(Rs,"La documentation officielle peut être retrouvée "),z=r(Rs,"A",{href:!0,rel:!0});var ta=c(z);ve=t(ta,"ici"),ta.forEach(e),ke=t(Rs,"."),Rs.forEach(e),ws=u(s),G=r(s,"P",{});var pa=c(G);Ee=t(pa,"Commençons donc !"),pa.forEach(e),Ts=u(s),L=r(s,"H2",{id:!0});var ra=c(L);_e=t(ra,"Le fichier Docker Compose"),ra.forEach(e),Ps=u(s),os=Ue(s,!1),ns=u(s),F=r(s,"H2",{id:!0});var ca=c(F);be=t(ca,"Comment déployer"),ca.forEach(e),xs=u(s),h=r(s,"P",{});var Ns=c(h);qe=t(Ns,"Avant de déployer notre service, nous avons besoin de créer le network Docker "),ts=r(Ns,"CODE",{});var ia=c(ts);he=t(ia,"traefik"),ia.forEach(e),we=t(Ns,"."),Ns.forEach(e),Bs=u(s),K=r(s,"P",{});var ua=c(K);Te=t(ua,"Pour cela, il suffit de faire :"),ua.forEach(e),Ss=u(s),ps=Ue(s,!1),rs=u(s),w=r(s,"P",{});var Us=c(w);Pe=t(Us,"Ensuite, dans le même directory que le fichier "),cs=r(Us,"CODE",{});var Ca=c(cs);xe=t(Ca,"dockercompose.yml"),Ca.forEach(e),Be=t(Us,", executez la commande :"),Us.forEach(e),zs=u(s),is=Ue(s,!1),us=u(s),Q=r(s,"P",{});var Aa=c(Q);Se=t(Aa,`Si tout s’est bien passé, vous ne devriez pas avoir d’erreur dans la console et en vous rendant sur l’endpoint du dashboard,
votre navigateur devrait vous demander le login et mot de passe avant de vous afficher le dashboard Traefik en lui-même !`),Aa.forEach(e),Ls=u(s),H=r(s,"H2",{id:!0});var ya=c(H);ze=t(ya,"Deployer un sous domaine"),ya.forEach(e),Fs=u(s),T=r(s,"P",{});var Xs=c(T);Le=t(Xs,"Dans "),O=r(Xs,"A",{href:!0,rel:!0});var fa=c(O);Fe=t(fa,"cet article"),fa.forEach(e),He=t(Xs,`, vous pourrez apprendre à
déployer un service web sur un sous domaine a l’aide du Traefik que nous venons de mettre en place !`),Xs.forEach(e),this.h()},h(){y(C,"id","présentation-de-traefik"),y(A,"href","https://doc.traefik.io/traefik/"),y(A,"rel","nofollow"),y(B,"id","mise-en-place-de-traefik"),y(S,"href","https://www.docker.com"),y(S,"rel","nofollow"),y(z,"href","https://doc.traefik.io/traefik/providers/docker/"),y(z,"rel","nofollow"),y(L,"id","le-fichier-docker-compose"),os.a=ns,y(F,"id","comment-déployer"),ps.a=rs,is.a=us,y(H,"id","deployer-un-sous-domaine"),y(O,"href","https://vadim-soude.github.io/Portfolio/traefik-docker-service"),y(O,"rel","nofollow")},m(s,l){o(s,C,l),a(C,m),o(s,v,l),o(s,f,l),a(f,A),a(A,d),a(f,R),a(f,$s),o(s,As,l),o(s,P,l),a(P,Ms),a(P,js),o(s,ys,l),o(s,x,l),a(x,Vs),a(x,Gs),o(s,fs,l),o(s,N,l),a(N,Ks),o(s,Ds,l),o(s,k,l),a(k,Qs),a(k,J),a(J,Js),a(k,Ws),a(k,W),a(W,Ys),o(s,ds,l),o(s,U,l),a(U,Zs),o(s,ms,l),o(s,B,l),a(B,gs),o(s,vs,l),o(s,X,l),a(X,D),a(D,Y),a(Y,se),a(D,ee),a(D,Z),a(Z,ae),a(D,le),a(D,g),a(g,oe),a(D,ne),a(D,te),a(D,pe),o(s,ks,l),o(s,_,l),a(_,re),a(_,S),a(S,ce),a(_,ie),o(s,Es,l),o(s,$,l),a($,ue),o(s,_s,l),o(s,M,l),a(M,Ce),o(s,bs,l),o(s,b,l),a(b,ss),a(ss,Ae),a(b,ye),a(b,j),a(j,fe),a(j,es),a(es,as),a(as,De),o(s,qs,l),o(s,V,l),a(V,ls),a(ls,de),o(s,hs,l),o(s,q,l),a(q,me),a(q,z),a(z,ve),a(q,ke),o(s,ws,l),o(s,G,l),a(G,Ee),o(s,Ts,l),o(s,L,l),a(L,_e),o(s,Ps,l),os.m(va,s,l),o(s,ns,l),o(s,F,l),a(F,be),o(s,xs,l),o(s,h,l),a(h,qe),a(h,ts),a(ts,he),a(h,we),o(s,Bs,l),o(s,K,l),a(K,Te),o(s,Ss,l),ps.m(ka,s,l),o(s,rs,l),o(s,w,l),a(w,Pe),a(w,cs),a(cs,xe),a(w,Be),o(s,zs,l),is.m(Ea,s,l),o(s,us,l),o(s,Q,l),a(Q,Se),o(s,Ls,l),o(s,H,l),a(H,ze),o(s,Fs,l),o(s,T,l),a(T,Le),a(T,O),a(O,Fe),a(T,He)},p:za,d(s){s&&e(C),s&&e(v),s&&e(f),s&&e(As),s&&e(P),s&&e(ys),s&&e(x),s&&e(fs),s&&e(N),s&&e(Ds),s&&e(k),s&&e(ds),s&&e(U),s&&e(ms),s&&e(B),s&&e(vs),s&&e(X),s&&e(ks),s&&e(_),s&&e(Es),s&&e($),s&&e(_s),s&&e(M),s&&e(bs),s&&e(b),s&&e(qs),s&&e(V),s&&e(hs),s&&e(q),s&&e(ws),s&&e(G),s&&e(Ts),s&&e(L),s&&e(Ps),s&&os.d(),s&&e(ns),s&&e(F),s&&e(xs),s&&e(h),s&&e(Bs),s&&e(K),s&&e(Ss),s&&ps.d(),s&&e(rs),s&&e(w),s&&e(zs),s&&is.d(),s&&e(us),s&&e(Q),s&&e(Ls),s&&e(H),s&&e(Fs),s&&e(T)}}}function Ha(I){let C,m;const v=[I[0],ma];let f={$$slots:{default:[Fa]},$$scope:{ctx:I}};for(let A=0;A<v.length;A+=1)f=Xe(f,v[A]);return C=new La({props:f}),{c(){ha(C.$$.fragment)},l(A){wa(C.$$.fragment,A)},m(A,d){Ta(C,A,d),m=!0},p(A,[d]){const R=d&1?Pa(v,[d&1&&Da(A[0]),d&0&&Da(ma)]):{};d&2&&(R.$$scope={dirty:d,ctx:A}),C.$set(R)},i(A){m||(xa(C.$$.fragment,A),m=!0)},o(A){Ba(C.$$.fragment,A),m=!1},d(A){Sa(C,A)}}}const ma={title:"Deploiement Traefik avec Docker.",description:"Une explication de comment déployer des Traefik, sous Docker, pour mettre en ligne des services en HTTPS.",date:"2024-2-6",categories:["Docker","Réseau","Proxy"],published:!0};function Oa(I,C,m){return I.$$set=v=>{m(0,C=Xe(Xe({},C),da(v)))},C=da(C),[C]}class Na extends _a{constructor(C){super(),ba(this,C,Oa,Ha,qa,{})}}export{Na as default,ma as metadata};