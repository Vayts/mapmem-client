import { SagaIterator } from 'redux-saga';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { createPublicationRequestStart } from '@src/store/createPublication/reducer';
import { addPublicationRequest } from '@src/store/createPublication/actions';
import { PayloadAction } from '@reduxjs/toolkit';
import { postRequestWithFiles } from '@src/api/request';
import { ROUTES } from '@constants/routes';
import { getCreatePublicationFormData } from '@helpers/createPublication.helper';
import { getNotification } from '@src/notification/notifications';
import i18n from 'i18next';
import { setPublications } from '@src/store/publications/reducer';
import { selectPublications } from '@src/store/publications/selectors';

const t = i18n.t;

function* addPublicationSaga(action: PayloadAction<any>): SagaIterator {
  const { values } = action.payload;
  const formData = getCreatePublicationFormData(values);
  try {
    yield put(createPublicationRequestStart);
    const response = yield call(postRequestWithFiles, ROUTES.PUBLICATION.ADD, formData);
    if (response) {
      getNotification(t('publicationAdded'), 'success');
    }
  } catch (e) {
    getNotification(t('somethingWentWrong'), 'error');
  }
}

export function* watchCreatePublication(): SagaIterator {
  yield takeLatest(addPublicationRequest, addPublicationSaga);
}
