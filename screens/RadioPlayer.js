import React from 'react'
import {
    Animated, Dimensions,
    FlatList, SafeAreaView,
    StyleSheet, Text, View
} from 'react-native'

const { width, height } = Dimensions.get('window');

const RadioPlayer = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.mainContainer}>

            <Text style={styles.commissioner}> HimaTekkom ITS App </Text>

            <Text style={styles.developer}> By Mohammed Fachry Dwi H ~ Informatics ITS </Text>

            {/*

            <Animated.FlatList
                ref={radioSlider}
                renderItem={renderChannels}
                data={channels}
                keyExtractor={item => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                  [
                    {
                      nativeEvent: {
                        contentOffset: {x: scrollX},
                      },
                    },
                  ],
                  {useNativeDriver: true},
                )}
            />

            */}

            {/*


            <View>
                <Text style={[styles.channelContent, styles.channelTitle]}>
                    {channels[channelIndex].title} {trackTitle}
                </Text>
                <Text style={[styles.channelContent, styles.channelArtist]}>
                    {channels[channelIndex].artist} {trackArtist}
                </Text>
            </View>

            */}

        </View>
    </SafeAreaView>
  )
}

export default RadioPlayer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F1',
    },

    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    commissioner: {
        fontSize: 30,
        fontWeight: '600',
    },

    developer: {
        paddingTop: 5,
        fontSize: 15,
        fontWeight: '300',
    },

    channelContent: {
        textAlign: 'center',
        color: '#EEEEEE',
    },

    channelTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    
    channelArtist: {
        fontSize: 16,
        fontWeight: '300',
    },
});