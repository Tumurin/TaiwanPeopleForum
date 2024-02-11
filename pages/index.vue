<template>
  <mainSection title="Hello Taiwan" :loading="loading"> hello </mainSection>
</template>
<script setup>
const loading = ref(false);
const { useAuthUser } = useAuth();
const user = useAuthUser();
</script>
