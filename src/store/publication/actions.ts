import { createAction } from '@reduxjs/toolkit';
import { PUBLICATION } from '@constants/actions';
import { ICreatePublicationDTO } from "@src/types/createPublication.types";

export const getCurrentPublicationRequest = createAction(PUBLICATION.GET_CURRENT_PUBLICATION, (id) => ({
  payload: { id },
}));
