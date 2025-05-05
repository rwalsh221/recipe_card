import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import RecipeCard from '../../../features/RecipeCard/RecipeCard';

import styles from './RecipeCardPage.module.css';

const RecipeCardPage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <RecipeCard />
      </main>
      <Footer />
    </>
  );
};

export default RecipeCardPage;
