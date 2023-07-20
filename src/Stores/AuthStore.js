import { useLocalStore } from 'mobx-react-lite';

const AuthStore = () => {
  const authStore = useLocalStore(() => ({
    isAuthenticated: false,
    username: '',
    login(username) {
      this.isAuthenticated = true;
      this.username = username;
    },
    logout() {
      this.isAuthenticated = false;
      this.username = '';
    },
  }));

  return authStore;
};

export default AuthStore;