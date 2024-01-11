import getStyleFromFile from '@/utils/style';
import { onMounted, ref } from 'vue';
import parse from 'style-to-object';

export default function useStyle(cssFileName: string) {
  const style = ref<Record<string, ReturnType<typeof parse>>>({});

  onMounted(async () => {
    style.value = await getStyleFromFile(cssFileName);
  });

  return {
    style,
  };
}
