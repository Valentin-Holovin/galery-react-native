import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { connect } from "react-redux";
import { setPhotos, fetchPhoto } from "../../redux/action";
import { RenderItem } from "../../components/renderItem/renderItem";
import { EmptyPhotos } from "../../components/emptyPhotos/emptyPhotos";

const GaleryScreen = ({ photos, setPhotos, fetchPhoto }) => {
  React.useEffect(() => {
    fetchPhoto().then((res) => {
      setPhotos(res.data);
    });
  }, []);

  const renderItem = React.useCallback(
    ({ item }) => <RenderItem item={item} />,
    []
  );

  const keyExtractor = React.useCallback((item) => item.id.toString(), []);

  return (
    <FlatList
      style={styles.contentContainerStyle}
      data={photos}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListEmptyComponent={<EmptyPhotos />}
    />
  );
};

const mapStateToProps = (state) => ({
  photos: state.photos.photos,
});

const mapDispatchToProps = {
  setPhotos: setPhotos,
  fetchPhoto: fetchPhoto,
};

export default connect(mapStateToProps, mapDispatchToProps)(GaleryScreen);

const styles = StyleSheet.create({
  titleWrapper: {
    marginVertical: 20,
    marginLeft: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
});
