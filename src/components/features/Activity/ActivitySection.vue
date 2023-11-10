<template>
  <div class="card">
    <div class="heading">Recently Activity</div>
    <div class="content">
      <p class="post-time">10.40 AM, Fri 10 Sept 2021</p>
      <h3 class="post-title">You Posted a New Job</h3>
      <p class="post-description">Kindly check the requirements and terms of work and make sure everything is right.
      </p>
    </div>
    <div class="action">
      <p class="activity-count">Today you makes 12 Activity</p>
      <button class="activity-button" type="button">
        See All Activity
      </button>
    </div>
  </div>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    border-radius: 10px;
    background: var(--tertiary-color);
    color: var(--just-white-color);
    border-radius: 10px;
}

.content {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 0px 20px;
}

.activity-count {
    color: var(--just-white-color);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.action {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 18px;
    padding: 0 20px 24px 20px;
    margin-top: 28px;
    flex-wrap: wrap;
}

.post-time {
    color: var(--just-white-color);
    font-family: var(--secondary-font);
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.6;
}

.post-title {
    color: var(--just-white-color);
    font-family: var(--primary-font);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
}

.post-description {
    color: var(--just-white-color);
    font-family: var(--secondary-font);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    align-self: stretch;
    opacity: 0.8;
}

.heading {
    border-radius: 10px 10px 0px 0px;
    background-color: #1b204a;
    align-items: center;
    display: flex;
    align-items: center;
    padding: 10px 20px;
}

.activity-button {
    background: var(--main-color);
    display: flex;
    height: 38px;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: none;
    border-radius: 4px;
    color: var(--just-white-color);
    white-space: nowrap;

    text-align: center;
    font-family: var(--main-font);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    max-width: 146px;
}

.activity-button:hover {
    cursor: pointer;
}

@media (min-width: 1200px) {
    .activity-button {
        max-width: 139px;
    }

    .heading {
        padding: 10px 24px;
    }

    .content {
        padding: 0px 24px;
    }

    .action {
        flex-direction: row;
        justify-content: space-between;
        padding: 0 24px 26px 24px;
        align-items: center;
    }
}
</style>
