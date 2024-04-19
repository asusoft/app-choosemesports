export const SharedTypes = `
    scalar Upload
    
    enum ErrorStatus {
        INVALID_INPUT_DATA
        NOT_AUTHENTICATED
        NOT_FOUND
        ALREADY_DONE
        ALREADY_EXIST
        NOT_ENOUGH_PERMISSIONS
        INVALID_CREDENTIALS
        UNKNOWN_ERROR
    }

    type BaseError {
        status: ErrorStatus!
    }

    type BooleanObject {
        boolean: Boolean!
    }

    union BooleanObjectOrBE = BooleanObject | BaseError

    type ErrorWithFields {
        status: ErrorStatus!
        fields: [String!]!
    }
`;

