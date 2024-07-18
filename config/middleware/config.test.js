const config = require('/Users/jay/bootcamp/ProjecTend/config/middleware/config.js');

describe('Config', () => {
  it('should have development configuration', () => {
    expect(config.development).toBeDefined();
    expect(config.development.username).toBe(process.env.DB_USERNAME);
    expect(config.development.password).toBe(process.env.DB_PASSWORD);
    expect(config.development.database).toBe(process.env.DB_NAME);
    expect(config.development.host).toBe(process.env.DB_HOST);
    expect(config.development.dialect).toBe(process.env.DB_DIALECT);
  });

  it('should have test configuration', () => {
    expect(config.test).toBeDefined();
    expect(config.test.username).toBe(process.env.DB_USERNAME);
    expect(config.test.password).toBe(process.env.DB_PASSWORD);
    expect(config.test.database).toBe(process.env.DB_NAME);
    expect(config.test.host).toBe(process.env.DB_HOST);
    expect(config.test.dialect).toBe(process.env.DB_DIALECT);
  });

  it('should have production configuration', () => {
    expect(config.production).toBeDefined();
    expect(config.production.username).toBe(process.env.DB_USERNAME);
    expect(config.production.password).toBe(process.env.DB_PASSWORD);
    expect(config.production.database).toBe(process.env.DB_NAME);
    expect(config.production.host).toBe(process.env.DB_HOST);
    expect(config.production.dialect).toBe(process.env.DB_DIALECT);
  });
});