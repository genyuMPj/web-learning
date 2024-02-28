## React Fiber
react 16 相比较 React 15 实现了 新的调度策略 Fiber --  Fiber实现了自己的组件调用栈，它以链表的形式遍历组件树，可以灵活的暂停、继续和丢弃执行的任务，基于 window.RequestIdleCallback 以及 window.requestAnimationFrame 原理实现。

对比：

### react 15 的递归遍历的组件调用栈

### react 16 Fiber

1. requestIdleCallback && requestAnimationFrame

推荐使用npm包request-idle-callback

 使用注意事项： 
- 1） 不要在 requestIdleCallback 中进行 dom 修改
  强烈建议不要，从上面一帧的构成里面可以看到，requestIdleCallback回调的执行说明前面的工作（包括样式变更以及布局计算）都已完成。如果我们在callback里面做DOM修改的话，之前所做的布局计算都会失效，而且如果下一帧里有获取布局（如getBoundingClientRect、clientWidth）等操作的话，浏览器就不得不执行强制重排工作,这会极大的影响性能，另外由于修改dom操作的时间是不可预测的，因此很容易超出当前帧空闲时间的阈值，故而不推荐这么做。推荐的做法是在requestAnimationFrame里面做dom的修改，可以在requestIdleCallback里面构建Document Fragment，然后在下一帧的requestAnimationFrame里面应用Fragment。

- 2） 不要执行Promise.resolve 或 Promise.reject， 理由： 会在idleCallback 执行完成后，再立即执行Promise.resolve 的回调， 相当于拉长了这一帧 的耗时。
- 3） requestIdleCallback 应该用于执行一些microTask 而且是可预测时间的任务。


你应该知道的requestIdleCallback： https://juejin.cn/post/6844903592831238157