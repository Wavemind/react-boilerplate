export default {
  actions: {
    send: 'Envoyer',
    login: 'Connexion',
  },
  navigation: {
    dashboard: 'Dashboard',
  },
  pages: {
    auth: {
      forgot_password: {
        title: 'Réinitialisation de mot de passe',
      },
      sign_in: {
        title: 'Bienvenue',
      },
      new_password: {
        title: 'Changer de mot de passe',
      },
      redirection: "Vous allez être redirigé d'ici quelques secondes",
      sign_in_url: 'Connexion',
      forgot_password_url: 'Mot de passe oublié ?',
    },
  },
  side_bar: {
    title: 'Accès personnel',
    logout: 'Déconnexion',
  },
  user: {
    email: 'Email',
    password: 'Mot de passe',
    password_confirmation: 'Confirmation du mot de passe',
  },
}
