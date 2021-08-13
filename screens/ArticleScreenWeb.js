import React from 'react';
import {ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

function LoadingIndicatorView() {
  return <ActivityIndicator color='#0f4471' size='large' />
}

function ArticleScreenWeb ({ data }) {
  //const { articleData } = data.params;
  console.log("ArticleScreenWeb: ", data);
    return (
      <WebView
        renderLoading={LoadingIndicatorView}
        startInLoadingState={true}
        source={{ uri: 'https://www.nerdwallet.com/article/investing/investing-101'}} //hardcoded because data.params is undefined?
        style={{ marginTop: 20, marginBottom: 20}}
      />
    );
}

export default ArticleScreenWeb;