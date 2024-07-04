import { StyleProvider, ThemePicker } from "vcc-ui";
import React from "react";
import ErrorBoundary from "src/errorBoundary/ErrorBoundary";
import Header from "src/components/Header";
import { View } from "vcc-ui";

function HomePage({ children }) {
  function updateviewSize() {
    var body = document.body,
      html = document.documentElement;

    var height =
      Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight,
      ) - 150;
    document.body.style.setProperty("--totalHeight", height + "px");
  }

  React.useEffect(() => {
    updateviewSize();
  }, []);
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          <ErrorBoundary>
            <Header />
            <View
              extend={{
                border: "0px solid grey",
              }}
            >
              <main>{children}</main>
            </View>
          </ErrorBoundary>
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
