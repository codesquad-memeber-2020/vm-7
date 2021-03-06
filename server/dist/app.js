"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _chalk = _interopRequireDefault(require("chalk"));

var _detectPort = _interopRequireDefault(require("detect-port"));

var _wallet = _interopRequireDefault(require("./api/wallet.js"));

var _machine = _interopRequireDefault(require("./api/machine.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// api
// utils
// server setup
let port;

async function configServer() {
  port = 3000 || (await (0, _detectPort.default)(3000));
}

configServer(); // express setup

const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use(_bodyParser.default.json()); // express routers

app.use('/product', _machine.default);
app.use('/wallet', _wallet.default); // start

app.listen(port, () => console.log(`${_chalk.default.white.bgHex('#41b883').bold(`VENDING MACHINE SERVER IS RUNNING ON ${port}`)}`));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsicG9ydCIsImNvbmZpZ1NlcnZlciIsImFwcCIsInVzZSIsImJvZHlQYXJzZXIiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJqc29uIiwibWFjaGluZSIsIndhbGxldCIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciLCJjaGFsayIsIndoaXRlIiwiYmdIZXgiLCJib2xkIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOztBQUNBOzs7O0FBRkE7QUFJQTtBQUVBO0FBQ0EsSUFBSUEsSUFBSjs7QUFDQSxlQUFlQyxZQUFmLEdBQThCO0FBQzVCRCxFQUFBQSxJQUFJLEdBQUcsU0FBUyxNQUFNLHlCQUFXLElBQVgsQ0FBZixDQUFQO0FBQ0Q7O0FBQ0RDLFlBQVksRyxDQUVaOztBQUNBLE1BQU1DLEdBQUcsR0FBRyx1QkFBWjtBQUNBQSxHQUFHLENBQUNDLEdBQUosQ0FBUSxvQkFBUjtBQUNBRCxHQUFHLENBQUNDLEdBQUosQ0FBUUMsb0JBQVdDLFVBQVgsQ0FBc0I7QUFBRUMsRUFBQUEsUUFBUSxFQUFFO0FBQVosQ0FBdEIsQ0FBUjtBQUNBSixHQUFHLENBQUNDLEdBQUosQ0FBUUMsb0JBQVdHLElBQVgsRUFBUixFLENBRUE7O0FBQ0FMLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLFVBQVIsRUFBb0JLLGdCQUFwQjtBQUNBTixHQUFHLENBQUNDLEdBQUosQ0FBUSxTQUFSLEVBQW1CTSxlQUFuQixFLENBRUE7O0FBQ0FQLEdBQUcsQ0FBQ1EsTUFBSixDQUFXVixJQUFYLEVBQWlCLE1BQ2ZXLE9BQU8sQ0FBQ0MsR0FBUixDQUNHLEdBQUVDLGVBQU1DLEtBQU4sQ0FDQUMsS0FEQSxDQUNNLFNBRE4sRUFFQUMsSUFGQSxDQUVNLHdDQUF1Q2hCLElBQUssRUFGbEQsQ0FFcUQsRUFIMUQsQ0FERiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJ1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuaW1wb3J0IGRldGVjdFBvcnQgZnJvbSAnZGV0ZWN0LXBvcnQnO1xuXG4vLyBhcGlcbmltcG9ydCB3YWxsZXQgZnJvbSAnLi9hcGkvd2FsbGV0LmpzJ1xuaW1wb3J0IG1hY2hpbmUgZnJvbSAnLi9hcGkvbWFjaGluZS5qcydcblxuLy8gdXRpbHNcblxuLy8gc2VydmVyIHNldHVwXG5sZXQgcG9ydDtcbmFzeW5jIGZ1bmN0aW9uIGNvbmZpZ1NlcnZlcigpIHtcbiAgcG9ydCA9IDMwMDAgfHwgKGF3YWl0IGRldGVjdFBvcnQoMzAwMCkpO1xufVxuY29uZmlnU2VydmVyKCk7XG5cbi8vIGV4cHJlc3Mgc2V0dXBcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmFwcC51c2UoY29ycygpKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5cbi8vIGV4cHJlc3Mgcm91dGVyc1xuYXBwLnVzZSgnL3Byb2R1Y3QnLCBtYWNoaW5lKTtcbmFwcC51c2UoJy93YWxsZXQnLCB3YWxsZXQpO1xuXG4vLyBzdGFydFxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PlxuICBjb25zb2xlLmxvZyhcbiAgICBgJHtjaGFsay53aGl0ZVxuICAgICAgLmJnSGV4KCcjNDFiODgzJylcbiAgICAgIC5ib2xkKGBWRU5ESU5HIE1BQ0hJTkUgU0VSVkVSIElTIFJVTk5JTkcgT04gJHtwb3J0fWApfWAsXG4gICksXG4pOyJdfQ==