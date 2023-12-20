import { useSelector } from 'react-redux';
import {
  selectErrorContacts,
  selectFilter,
  selectIsLoadingContacts,
  selectVisibleContacts,
} from 'store/selectors';
import styles from './Phonebook.module.scss';
import visibleContactsMap from './visibleContactsMap';

export const PhonebookList = ({ recent = false }) => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoadingContacts);
  const error = useSelector(selectErrorContacts);
  return (
    <>
      {recent && <p>Recent contacts</p>}
      <ul className={styles.contactsList}>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : filter ? (
          visibleContactsMap(visibleContacts)
        ) : (
          visibleContactsMap(visibleContacts, recent)
        )}
      </ul>
    </>
  );
};