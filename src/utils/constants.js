const STATUS_CODES = {
    SUCCESS: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
};

const MESSAGES = {
    TASK_CREATED: "Task created successfully.",
    TASK_UPDATED: "Task updated successfully.",
    TASK_DELETED: "Task deleted successfully.",
    PROJECT_CREATED: "Project created successfully.",
    PROJECT_UPDATED: "Project updated successfully.",
    USER_REGISTERED: "User registered successfully.",
    USER_AUTHENTICATED: "User authenticated successfully.",
    INVALID_CREDENTIALS: "Invalid credentials.",
    UNAUTHORIZED_ACCESS: "Unauthorized access.",
    NOT_FOUND: "Resource not found.",
    SERVER_ERROR: "An internal server error occurred.",
};

export default {
    STATUS_CODES,
    MESSAGES,
};