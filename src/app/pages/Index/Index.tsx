import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import RecipeCardForm from '../../../features/RecipeCardForm';
import styles from './Index.module.css';

const Index = () => {
  return (
    <>
      <Header />
      <main className={styles.index}>
        <RecipeCardForm />
      </main>
      <Footer />
    </>
  );
};

export default Index;
