import Notiflix from 'notiflix';

export const alertSucces = () => {
  Notiflix.Notify.success(`operation done successfully`);
};

export const alertFailure = () => {
  Notiflix.Notify.failure(`Oops,something went wrong :(`);
};
