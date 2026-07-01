<div align="center">
  <h1>@rc-component/async-validator</h1>
  <p><sub><a href="https://ant.design"><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /></a> Ant Design 生态的一部分。</sub></p>
  <p>✅ 基于规则描述的异步表单校验引擎。</p>

  <p>
    <a href="https://npmjs.org/package/@rc-component/async-validator"><img alt="NPM version" src="https://img.shields.io/npm/v/@rc-component/async-validator.svg?style=flat-square"></a>
    <a href="https://npmjs.org/package/@rc-component/async-validator"><img alt="npm downloads" src="https://img.shields.io/npm/dm/@rc-component/async-validator.svg?style=flat-square"></a>
    <a href="https://github.com/react-component/async-validator/actions/workflows/test.yml"><img alt="build status" src="https://github.com/react-component/async-validator/actions/workflows/test.yml/badge.svg"></a>
    <a href="https://app.codecov.io/gh/react-component/async-validator"><img alt="Codecov" src="https://img.shields.io/codecov/c/github/react-component/async-validator/master.svg?style=flat-square"></a>
    <a href="https://bundlephobia.com/package/@rc-component/async-validator"><img alt="bundle size" src="https://img.shields.io/bundlephobia/minzip/@rc-component/async-validator?style=flat-square"></a>
    <a href="https://github.com/umijs/dumi"><img alt="dumi" src="https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square"></a>
  </p>
</div>

<p align="center">简体中文 | <a href="./README.md">English</a></p>

## 亮点

| 方向 | 支持                             |
| ---- | -------------------------------- |
| 定位 | 基于规则描述的异步表单校验引擎。 |
| 包名 | `@rc-component/async-validator`  |
| 发布 | `@rc-component/np` / `rc-np`     |

## 安装

```bash
npm install @rc-component/async-validator
```

## 用法

```tsx | pure
import Schema from '@rc-component/async-validator';

const validator = new Schema({
  name: { type: 'string', required: true },
});

validator.validate({ name: 'Ant Design' }).then(() => {
  // validation passed
});
```

## API

| 名称                                    | 说明                       |
| --------------------------------------- | -------------------------- |
| `new Schema(descriptor)`                | 根据规则描述创建校验器。   |
| `validate(source, options?, callback?)` | 校验源数据并返回 Promise。 |
| `messages`                              | 自定义校验提示。           |

## 本地开发

```bash
ut install
npm start
npm test
npm run coverage
npm run lint
npm run tsc
npm run compile
```

本地 dumi 站点默认运行在 `http://localhost:8000`.

## 发布

```bash
npm run prepublishOnly
```

发布流程通过 `@rc-component/np` 提供的 `rc-np` 命令处理。

## 许可证

@rc-component/async-validator 基于 [MIT](./LICENSE.md) 协议发布。
