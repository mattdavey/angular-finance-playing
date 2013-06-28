basePath = '../';

preprocessors = {
  '**/js/*.js': 'coverage'
};

reporters = ['coverage'];

coverageReporter = {
  type : 'html',
  dir : 'coverage/'
};

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/lib/angular/angular.js',
  'app/lib/angular/angular-*.js',
  'test/lib/angular/angular-mocks.js',
  'app/js/**/*.js',
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
