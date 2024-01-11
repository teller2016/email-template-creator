import getStyleFromFile from '@/utils/style';
import { onMounted, ref } from 'vue';

export default function useStyle(cssFileName: string) {
  const style = ref<any>({});

  onMounted(async () => {
    style.value = await getStyleFromFile(cssFileName);
  });

  return {
    style,
  };
}
