import AuthStore from "./AuthStore";
import ItemStore from "./ItemStore";
import { useLocalStore } from 'mobx-react-lite';
const Store = () => {
    const store = useLocalStore(() => ({
      authStore: AuthStore(),
      itemStore: ItemStore(),
    }));
  
    return store;
  };
  
  export default Store;