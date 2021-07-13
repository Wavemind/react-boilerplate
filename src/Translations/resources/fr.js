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
        forgot_password: 'Mot de passe oublié ?',
      },
      new_password: {
        title: 'Changer de mot de passe',
      },
      redirection: "Vous allez être redirigé d'ici quelques secondes",
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
