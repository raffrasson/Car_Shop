export enum ErrorTypes {
  ObjectNotFound = 'ObjectNotFound',
  InvalidMongoId = 'InvalidMongoId',
}

type ErrorResponseObject = { 
  error: string;
  httpStatus: number
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject

};

export const errorCatalog: ErrorCatalog = {
  ObjectNotFound: {
    error: 'Object not found',
    httpStatus: 404,
  },
  InvalidMongoId: {
    error: 'Id must be a 24 characters hexadecimal',
    httpStatus: 400,
  },
};