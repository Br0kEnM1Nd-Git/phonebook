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
    <ul className={styles.contactsList}>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : recent ? (
        filter ? (
          visibleContactsMap(visibleContacts)
        ) : (
          <>
            <p>Recent contacts</p>
            {visibleContactsMap(visibleContacts, recent)}
          </>
        )
      ) : (
        visibleContactsMap(visibleContacts)
      )}
    </ul>
  );
};
