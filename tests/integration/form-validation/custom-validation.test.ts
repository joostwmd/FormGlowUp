import { describe, it, expect } from 'vitest';
import { validateCustomParameters } from '$lib/form/utils/question-validation/custom';


describe('Custom Validation Integration Tests', () => {
    const mockSubmitId = 'test_custom';

    describe('Numeric Validations', () => {
        it('should validate greater than', () => {
            const result = validateCustomParameters(
                {
                    type: 'text',
                    submitId: mockSubmitId,
                    validation: {
                        isRequired: true,
                        category: 1, // CATEGORY_NUMBER
                        type: 1, // GREATER_THAN
                        value: ['10'],
                        message: 'Custom error message'
                    },
                    attributes: {
                        isParagraph: false
                    },
                    displayData: {
                        title: 'Test Number',
                        description: 'Enter a number greater than 10'
                    }
                },
                '15'
            );
            expect(result.valid).toBe(true);
            expect(result.message).toBe('');
        });

        it('should validate between range', () => {
            const result = validateCustomParameters(
                {
                    type: 'text',
                    submitId: mockSubmitId,
                    validation: {
                        isRequired: true,
                        category: 1, // CATEGORY_NUMBER
                        type: 7, // BETWEEN
                        value: ['1', '10'],
                        message: 'Number must be between 1 and 10'
                    },
                    attributes: {
                        isParagraph: false
                    },
                    displayData: {
                        title: 'Test Range',
                        description: 'Enter a number between 1 and 10'
                    }
                },
                '5'
            );
            expect(result.valid).toBe(true);
            expect(result.message).toBe('');
        });
    });

    describe('Text Validations', () => {
        it('should validate email format', () => {
            const result = validateCustomParameters(
                {
                    type: 'text',
                    submitId: mockSubmitId,
                    validation: {
                        isRequired: true,
                        category: 2, // CATEGORY_TEXT
                        type: 102, // IS_EMAIL
                        value: [],
                        message: 'Invalid email format'
                    },
                    attributes: {
                        isParagraph: false
                    },
                    displayData: {
                        title: 'Test Email',
                        description: 'Enter a valid email'
                    }
                },
                'test@example.com'
            );
            expect(result.valid).toBe(true);
            expect(result.message).toBe('');
        });

        it('should validate contains text', () => {
            const result = validateCustomParameters(
                {
                    type: 'text',
                    submitId: mockSubmitId,
                    validation: {
                        isRequired: true,
                        category: 2, // CATEGORY_TEXT
                        type: 100, // CONTAINS
                        value: ['test'],
                        message: 'Must contain "test"'
                    },
                    attributes: {
                        isParagraph: false
                    },
                    displayData: {
                        title: 'Test Contains',
                        description: 'Enter text containing "test"'
                    }
                },
                'this is a test string'
            );
            expect(result.valid).toBe(true);
            expect(result.message).toBe('');
        });
    });

    describe('Invalid Cases', () => {
        it('should fail for invalid number comparison', () => {
            const result = validateCustomParameters(
                {
                    type: 'text',
                    submitId: mockSubmitId,
                    validation: {
                        isRequired: true,
                        category: 1, // CATEGORY_NUMBER
                        type: 1, // GREATER_THAN
                        value: ['10'],
                        message: 'Number must be greater than 10'
                    },
                    attributes: {
                        isParagraph: false
                    },
                    displayData: {
                        title: 'Test Number',
                        description: 'Enter a number greater than 10'
                    }
                },
                '5'
            );
            expect(result.valid).toBe(false);
            expect(result.message).toBe('Number must be greater than 10');
        });

        it('should fail for invalid email format', () => {
            const result = validateCustomParameters(
                {
                    type: 'text',
                    submitId: mockSubmitId,
                    validation: {
                        isRequired: true,
                        category: 2, // CATEGORY_TEXT
                        type: 102, // IS_EMAIL
                        value: [],
                        message: 'Invalid email format'
                    },
                    attributes: {
                        isParagraph: false
                    },
                    displayData: {
                        title: 'Test Email',
                        description: 'Enter a valid email'
                    }
                },
                'invalid-email'
            );
            expect(result.valid).toBe(false);
            expect(result.message).toBe('Invalid email format');
        });
    });

    describe('Edge Cases', () => {
        it('should handle empty validation rules', () => {
            const result = validateCustomParameters(
                {
                    type: 'text',
                    submitId: mockSubmitId,
                    validation: {
                        isRequired: false
                    },
                    attributes: {
                        isParagraph: false
                    },
                    displayData: {
                        title: 'Test Empty',
                        description: 'No validation'
                    }
                },
                'any value'
            );
            expect(result.valid).toBe(true);
            expect(result.message).toBe('');
        });

        it('should handle missing validation values', () => {
            const result = validateCustomParameters(
                {
                    type: 'text',
                    submitId: mockSubmitId,
                    validation: {
                        isRequired: true,
                        category: 1, // CATEGORY_NUMBER
                        type: 1 // GREATER_THAN
                    },
                    attributes: {
                        isParagraph: false
                    },
                    displayData: {
                        title: 'Test Missing',
                        description: 'Missing validation values'
                    }
                },
                '123'
            );
            expect(result.valid).toBe(true);
            expect(result.message).toBe('');
        });
    });
});