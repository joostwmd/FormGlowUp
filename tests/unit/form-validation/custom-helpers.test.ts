import { describe, it, expect } from 'vitest';
import {
    greaterThan,
    greaterThanOrEqual,
    lessThan,
    lessThanOrEqual,
    equal,
    notEqual,
    between,
    notBetween,
    isNumber,
    isInteger,
    contains,
    notContains,
    isEmail,
    isUrl,
    maxLength,
    minLength,
    equals,
    notEquals
} from '$lib/form/utils/question-validation/custom/helpers';

describe('Number Comparison Helpers', () => {
    it('tests greaterThan', () => {
        expect(greaterThan('10', '5')).toBe(true);
        expect(greaterThan('5', '10')).toBe(false);
        expect(greaterThan('10.5', '10')).toBe(true);
    });

    it('tests greaterThanOrEqual', () => {
        expect(greaterThanOrEqual('10', '10')).toBe(true);
        expect(greaterThanOrEqual('5', '10')).toBe(false);
        expect(greaterThanOrEqual('10.5', '10')).toBe(true);
    });

    it('tests lessThan', () => {
        expect(lessThan('5', '10')).toBe(true);
        expect(lessThan('10', '5')).toBe(false);
        expect(lessThan('9.9', '10')).toBe(true);
    });

    it('tests lessThanOrEqual', () => {
        expect(lessThanOrEqual('10', '10')).toBe(true);
        expect(lessThanOrEqual('15', '10')).toBe(false);
        expect(lessThanOrEqual('9.9', '10')).toBe(true);
    });

    it('tests between', () => {
        expect(between('15', '10', '20')).toBe(true);
        expect(between('5', '10', '20')).toBe(false);
        expect(between('15.5', '15', '16')).toBe(true);
    });

    it('tests notBetween', () => {
        expect(notBetween('5', '10', '20')).toBe(true);
        expect(notBetween('15', '10', '20')).toBe(false);
        expect(notBetween('9.9', '10', '20')).toBe(true);
    });
});

describe('String Validation Helpers', () => {
    it('tests equal and notEqual', () => {
        expect(equal('test', 'test')).toBe(true);
        expect(equal('test', 'other')).toBe(false);
        expect(notEqual('test', 'other')).toBe(true);
        expect(notEqual('test', 'test')).toBe(false);
    });

    it('tests contains and notContains', () => {
        expect(contains('test string', 'test')).toBe(true);
        expect(contains('test string', 'xyz')).toBe(false);
        expect(notContains('test string', 'xyz')).toBe(true);
        expect(notContains('test string', 'test')).toBe(false);
    });

    it('tests maxLength', () => {
        expect(maxLength('test', '5')).toBe(true);
        expect(maxLength('test', '3')).toBe(false);
        expect(maxLength('', '1')).toBe(true);
        expect(maxLength('test', '4')).toBe(true);
    });

    it('tests minLength', () => {
        expect(minLength('test', '3')).toBe(true);
        expect(minLength('test', '5')).toBe(false);
        expect(minLength('', '1')).toBe(false);
        expect(minLength('test', '4')).toBe(true);
    });

    it('tests equals', () => {
        expect(equals('test', 'test')).toBe(true);
    })

    it('tests notEquals', () => {
        expect(notEquals('test', 'test')).toBe(false);
    })
});

describe('Type Validation Helpers', () => {
    it('tests isNumber', () => {
        expect(isNumber('123')).toBe(true);
        expect(isNumber('12.34')).toBe(true);
        expect(isNumber('abc')).toBe(false);
        expect(isNumber('-123.45')).toBe(true);
        expect(isNumber('')).toBe(false);
    });

    it('tests isInteger', () => {
        expect(isInteger('123')).toBe(true);
        expect(isInteger('12.34')).toBe(false);
        expect(isInteger('-123')).toBe(true);
        expect(isInteger('abc')).toBe(false);
        expect(isInteger('')).toBe(false);
    });

    it('tests isEmail', () => {
        expect(isEmail('test@example.com')).toBe(true);
        expect(isEmail('test.name@example.co.uk')).toBe(true);
        expect(isEmail('invalid-email')).toBe(false);
        expect(isEmail('@example.com')).toBe(false);
        expect(isEmail('test@')).toBe(false);
    });

    it('tests isUrl', () => {
        expect(isUrl('https://example.com')).toBe(true);
        expect(isUrl('http://example.com')).toBe(true);
        expect(isUrl('invalid-url')).toBe(false);
        expect(isUrl('example.com')).toBe(false);
        expect(isUrl('')).toBe(false);
    });
});
