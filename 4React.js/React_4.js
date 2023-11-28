// 4. React: 條件渲染
// 問題：在React中，如何根據條件渲染兩種不同的內容？

function ConditionalRendering({ isLoggedIn }) {
  // 實作你的條件渲染

  return <>{isLoggedIn ? "我是有參數True" : "我沒有參數Error"}</>;
}

export default ConditionalRendering;
