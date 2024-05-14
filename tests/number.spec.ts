import Schema from '../src';

describe('number', () => {
  it('works', done => {
    new Schema({
      v: {
        type: 'number',
      },
    }).validate(
      {
        v: '1',
      },
      errors => {
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe('v is not a number');
        done();
      },
    );
  });

  it('works for no-required', done => {
    new Schema({
      v: {
        type: 'number',
      },
    }).validate(
      {
        v: undefined,
      },
      errors => {
        expect(errors).toBeFalsy();
        done();
      },
    );
  });

  it('works for no-required in case of empty string', done => {
    new Schema({
      v: {
        type: 'number',
        required: false,
      },
    }).validate(
      {
        v: '',
      },
      errors => {
        expect(errors).toBeFalsy();
        done();
      },
    );
  });

  it('works for required', done => {
    new Schema({
      v: {
        type: 'number',
        required: true,
      },
    }).validate(
      {
        v: undefined,
      },
      errors => {
        expect(errors.length).toBe(1);
        expect(errors[0].message).toBe('v is required');
        done();
      },
    );
  });

  it('transform does not change value', done => {
    const value = {
      v: '1',
    };
    new Schema({
      v: {
        type: 'number',
        transform: Number,
      },
    }).validate(value, (errors, data) => {
      expect(data).toEqual({
        v: 1,
      });
      expect(value.v).toBe('1');
      expect(errors).toBeFalsy();
      done();
    });
  });

  it('return transformed value in promise.then', done => {
    const value = {
      v: '1',
    };
    new Schema({
      v: {
        type: 'number',
        transform: Number,
      },
    })
      .validate(value, errors => {
        expect(value.v).toBe('1');
        expect(errors).toBeFalsy();
      })
      .then(source => {
        expect(source).toEqual({
          v: 1,
        });
        done();
      });
  });
  it('transform type', done => {
    const value = { v: 'a' };
    new Schema({
      v: { required: true, type: 'number', transform: () => 0 },
    })
      .validate(value, errors => {
        expect(errors).toBeFalsy();
      })
      .then(source => {
        expect(source).toEqual({ v: 0 });
        done();
      });
  });
  it('transform string', done => {
    const value = { v: 'a' };
    new Schema({
      v: { required: true, transform: v => v },
    })
      .validate(value, errors => {
        expect(errors).toBeFalsy();
      })
      .then(source => {
        expect(source).toEqual({ v: 'a' });
        done();
      });
  });
  it('transform number', done => {
    const value = { v: 0 };
    new Schema({
      v: { required: true, transform: v => v },
    })
      .validate(value, errors => {
        expect(errors).toBeFalsy();
      })
      .then(source => {
        expect(source).toEqual({ v: 0 });
        done();
      });
  });
  it('transform array', done => {
    const value = { v: [0, 1] };
    new Schema({
      v: { required: true, transform: v => v },
    })
      .validate(value, errors => {
        expect(errors).toBeFalsy();
      })
      .then(source => {
        expect(source).toEqual({ v: [0, 1] });
        done();
      });
  });
  it('transform undefined', done => {
    const value = { v: [0, 1] };
    new Schema({
      v: { required: true, transform: v => undefined },
    }).validate(value, errors => {
      expect(errors).toBeTruthy();
      expect(errors[0].message).toBe('v is required');
      done();
    });
  });
  it('empty array message is "v is required"', done => {
    const value = { v: [] };
    new Schema({
      v: { required: true, transform: () => [] },
    }).validate(value, errors => {
      expect(errors).toBeTruthy();
      expect(errors[0].message).toBe('v is required');
      done();
    });
  });
});
