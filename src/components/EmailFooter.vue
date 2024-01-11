<template>
  <tr>
    <td :style="style.footer">
      <table>
        <tr>
          <td :style="style.footer__notice">
            본 메일은 발신전용이므로 회신 처리되지 않습니다.<br />
            타인이 회원님의 E-Mail 주소를 잘못 입력한 경우 메일이 반송될 수 있습니다.<br />
            문의사항과 잘못 수신된 메일일 경우, 스마일게이트 희망스튜디오
            <a
              href="$$경로_1:1문의"
              :style="style.footer__noticeLink"
              >1:1문의하기</a
            >를 통해 문의해주세요.
          </td>
        </tr>
      </table>

      <table :style="style.footer__content">
        <tr>
          <td :style="style.footer__desc">
            {comName}<br />
            {comAddr1} {comAddr2}<br />
            대표자명 : $$대표자명 | 개인정보관리책임자 : $$개인정보관리책임자 | 사업자등록번호 : {comNumber}<br />
            대표전화 : $$대표전화
          </td>
        </tr>
        <tr>
          <td :style="style.footer__copyright">Copyright 2023 Heemang studio. All rights reserved.</td>
        </tr>
      </table>
    </td>
  </tr>
</template>

<script setup lang="ts">
  import useStyle from '@/composables/use/use-style';

  const { style } = useStyle('footer.css');
</script>

<style scoped lang="scss"></style>
