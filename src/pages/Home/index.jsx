import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import PhonebookFilter from 'components/PhonebookList/PhonebookFilter';
import { PhonebookList } from 'components/PhonebookList/PhonebookList';
import { useDispatch } from 'react-redux';
import { changeFilterAction } from 'store/filterSlice';

const Home = () => {
  const dispatch = useDispatch();
  dispatch(changeFilterAction(''));

  return (
    <>
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h2>Contacts</h2>
      <PhonebookFilter />
      <PhonebookList recent />
    </>
  );
};

export default Home;
