import React from "react";
import { StyleSheet, View, Dimensions, ViewStyle } from "react-native";
import SkeletonLoader from "expo-skeleton-loader";

const { width, height } = Dimensions.get("window");


export default class Skeleton {

    filter() {
        <SkeletonLoader>
            <SkeletonLoader.Container
            style={[{ flex: 1, flexDirection: "row" }]}
            >
            <SkeletonLoader.Container
            style={[{ flexDirection: "column" }]}
            >
            <SkeletonLoader.Item
                style={{
                width: '42%',
                height: 20,
                borderRadius: 2,
                marginRight: 20,
            }}
            /> //title
            <SkeletonLoader.Item
                style={{
                width: '42%',
                height: 20,
                borderRadius: 2,
                marginRight: 20,
            }}
            /> //mercado
            <SkeletonLoader.Container
            style={[{ flexDirection: "column" }]}
            >
            <SkeletonLoader.Item
                style={{
                    width: '42%',
                    height: 20,
                    borderRadius: 2,
                    marginRight: 20,
                }}
            /> //startAt
            <SkeletonLoader.Item
                style={{
                    width: '42%',
                    height: 20,
                    borderRadius: 2,
                    marginRight: 20,
                }}
            /> //endAt
                </SkeletonLoader.Container>
            <SkeletonLoader.Container
            style={[{ flexDirection: "column" }]}
            >
            <SkeletonLoader.Item
                style={{
                width: '42%',
                height: 20,
                borderRadius: 2,
                marginRight: 20,
            }}
            /> //start preço
            <SkeletonLoader.Item
                style={{
                width: '42%',
                height: 20,
                borderRadius: 2,
                marginRight: 20,
            }}
            /> //end preço
                </SkeletonLoader.Container>
            </SkeletonLoader.Container>
            <SkeletonLoader.Container style={{ paddingVertical: 10 }}>
                <SkeletonLoader.Item
                style={{ width: 220, height: 20, marginBottom: 5 }}
                />
                <SkeletonLoader.Item style={{ width: 150, height: 20 }} />
            </SkeletonLoader.Container>
            </SkeletonLoader.Container>
        </SkeletonLoader>
    }

    card() {
        <SkeletonLoader>
            <SkeletonLoader.Container
            style={[{ flex: 1, flexDirection: "row" }]}
            >
            <SkeletonLoader.Item
                style={{
                width: size,
                height: size,
                borderRadius: size / 2,
                marginRight: 20,
                }}
            />
            <SkeletonLoader.Container style={{ paddingVertical: 10 }}>
                <SkeletonLoader.Item
                style={{ width: 220, height: 20, marginBottom: 5 }}
                />
                <SkeletonLoader.Item style={{ width: 150, height: 20 }} />
            </SkeletonLoader.Container>
            </SkeletonLoader.Container>
        </SkeletonLoader>
    }

    productDetails() {
        <SkeletonLoader style={{flex:1, backgroundColor: 'black'}}>
            <SkeletonLoader.Item
                style={{
                    marginTop: 15,
                    width: '97%',
                    height:200,
                }}
            />
            <SkeletonLoader.Container style={{ paddingVertical: 10 }}>
                <SkeletonLoader.Item
                style={{ width: 160, height: 20, marginBottom: 20 }}
                />
                <SkeletonLoader.Item style={{ width: 230, height: 20 }} />
                <SkeletonLoader.Item style={{ width: 230, height: 20 }} />
                <SkeletonLoader.Item style={{ width: 230, height: 20 }} />
                <SkeletonLoader.Item style={{ width: 230, height: 20 }} />
            </SkeletonLoader.Container>
        </SkeletonLoader>
    }
}
