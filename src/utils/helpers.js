// This file contains utility functions that can be reused across the application.

const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
};

const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US');
};

const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
};

export default {
    generateId,
    formatDate,
    isEmpty
};