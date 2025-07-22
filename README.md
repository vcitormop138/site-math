# MathCours

Site de cours de mathématiques moderne avec gestion d’abonnement, édition admin, support mathématiques, images, vidéos, et déploiement sur Render.

## Fonctionnalités
- **Authentification** : Inscription et connexion des utilisateurs.
- **Gestion des cours** : Ajouter, modifier, et afficher des cours avec support KaTeX.
- **Zone gratuite** : Définir une partie accessible sans abonnement.
- **Abonnement** : Paiement via Stripe pour accéder au contenu complet sans publicité.
- **Édition admin** : Gestion des cours/pages directement depuis le frontend.
- **Support multimédia** : Upload d'images et vidéos intégrées dans les cours.
- **Déploiement** : Docker Compose pour déploiement sur Render.

---

## Structure du projet

```
site-math/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── app.js
│   ├── server.js
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── theme.js
│   ├── public/
│   ├── package.json
│   └── .env.example
├── docker-compose.yml
└── README.md
```

---

## Installation et utilisation

### 1. Clonez le projet
```bash
git clone https://github.com/vcitormop138/site-math.git
cd site-math
```

### 2. Configurez les fichiers `.env`
- Ajoutez vos clés Stripe, PostgreSQL, et autres secrets dans :
  - `backend/.env`
  - `frontend/.env`

Exemple de configuration dans `backend/.env.example` :
```env
JWT_SECRET=your_jwt_secret
DATABASE_URL=postgres://user:password@localhost:5432/mathcours
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Exemple de configuration dans `frontend/.env.example` :
```env
REACT_APP_BACKEND_URL=http://localhost:4000
```

### 3. Lancez Docker Compose
```bash
docker-compose up
```

### 4. Accédez au site
- Frontend : [http://localhost:5173](http://localhost:5173)
- Backend : [http://localhost:4000](http://localhost:4000)

---

## Déploiement sur Render

### Backend
1. Créez un service Web sur Render.
2. Configurez les variables d'environnement avec celles de `backend/.env`.

### Frontend
1. Créez un site statique sur Render.
2. Configurez `REACT_APP_BACKEND_URL` pour pointer sur l'URL du backend Render.

### PostgreSQL
1. Créez une base de données PostgreSQL sur Render.
2. Renseignez l'URL de connexion dans `backend/.env`.

---

## Ressources
- [Render](https://render.com/)
- [Stripe](https://stripe.com/)
- [KaTeX](https://katex.org/)