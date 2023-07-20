import { useLocalStore } from 'mobx-react-lite';

const ItemStore = () => {
  const itemStore = useLocalStore(() => ({
    items: [],
    setItem(items) {
      this.items = items
    },
  }));

  return itemStore;
};

export default ItemStore;