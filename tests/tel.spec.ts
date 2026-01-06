import Schema from '../src';

describe('tel', () => {
  it('works for empty string', done => {
    new Schema({
      v: {
        type: 'tel',
      },
    }).validate(
      {
        v: '',
      },
      errors => {
        expect(errors).toBe(null);
        done();
      },
    );
  });

  it('works for china mobile phone number', done => {
    new Schema({
      v: {
        type: 'tel',
      },
    }).validate(
      {
        v: '13156451303',
      },
      errors => {
        expect(errors).toBe(null);
        done();
      },
    );
  });

  it('works for china mobile phone number with country code', done => {
    new Schema({
      v: {
        type: 'tel',
      },
    }).validate(
      {
        v: '+8613156451303',
      },
      errors => {
        expect(errors).toBe(null);
        done();
      },
    );
  });

  it('works for china mobile phone number with spaces', done => {
    new Schema({
      v: {
        type: 'tel',
      },
    }).validate(
      {
        v: '+86 131 5645 1303',
      },
      errors => {
        expect(errors).toBe(null);
        done();
      },
    );
  });

  it('works for us phone number with brackets, dashes, and spaces', done => {
    new Schema({
      v: {
        type: 'tel',
      },
    }).validate(
      {
        v: '(123) 456-7890',
      },
      errors => {
        expect(errors).toBe(null);
        done();
      },
    );
  });

  it('works for required empty string', done => {
    new Schema({
      v: {
        type: 'tel',
        required: true,
      },
    }).validate(
      {
        v: '',
      },
      errors => {
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe('v is required');
        done();
      },
    );
  });

});
