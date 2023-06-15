const createUsersCount = (users) => {
    console.log(users)
    const data = {
      approved: 0,
      rejected: 0,
      pending: 0,
      
    };

    users.forEach((user) => {
        const status = user.userStatus;
        if (status === "APPROVED") data.approved += 1;
        else if (status === "PENDING") data.pending += 1;
        else data.rejected += 1;
      });

    return data
}

export default createUsersCount;