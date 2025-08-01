import reportWebVitals from '../reportWebVitals';

describe('Web Vitals Reporting', () => {
  test('reportWebVitals calls performance callback', () => {
    const mockPerfCallback = jest.fn();
    reportWebVitals(mockPerfCallback);
    expect(mockPerfCallback).toHaveBeenCalled();
  });

  test('handles null callback gracefully', () => {
    expect(() => reportWebVitals(null)).not.toThrow();
  });
});