// MiPDF.js
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import data from './data.json';
import TablasStock from './TablasStock';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    height:'100%'
  },
  item: {
    width: '49%',
    height:'100%',
  },
  image: {
    maxWidth: "100%",
    marginBottom: 10,
    
  },
  descripcion:{
    textAlign:"center", 

  },
});

const MiPDF = () => {
  const renderItems = () => {
    const pages = [];
    let currentPage = [];

    data.forEach((item, index) => {
      currentPage.push( 
        //items de cada view
        <View key={`item-${item.id}`} style={styles.item}>
          <Image src={item.imagen} style={styles.image} />
          <Text  style={styles.descripcion} >{item.text}</Text>
          <TablasStock marca='Kaury' />
        </View>
      );  
      // Cada página contendrá dos items
      if (currentPage.length === 2 || index === data.length - 1) {
        pages.push(
          <Page key={`page-${pages.length + 1}`} size="A4" orientation='landscape'>
            <View style={styles.container} >{currentPage}</View>
          </Page>
        );
        currentPage = [];
      }
    });
    return pages;
  };
  return <Document>{renderItems()}
  </Document>;
};

export default MiPDF;